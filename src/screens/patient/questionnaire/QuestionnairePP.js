import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, ActivityIndicator} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {GetQuestion} from '../../../redux/action/doctor/questionnaireAction';
import AnimInput from '../../../components/molecules/AnimInput/AnimInput';
import RadioGroup from '../../../components/molecules/RadioGroup/RadioGroup';
import RadioBtn from '../../../components/atoms/RadioBtn/RadioBtn';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import RadialGradient from 'react-native-radial-gradient';
import StepsTracker from '../../../components/atoms/StepsTracker/StepsTracker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRef} from 'react';
function QuestionnairePP() {
  const {
    gettingQuestionnaire,
    questions,
    errorGettingQuestionnaire,
  } = useSelector((state) => state.questionnaireReducer);

  const {
    data: {id},
  } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  const [localQuestion, setLocalQuestion] = useState([]);
  const [questionCurrentId, setQuestionCurrentId] = useState('');

  useEffect(() => {
    !gettingQuestionnaire && dispatch(GetQuestion(id));
    !gettingQuestionnaire && setLocalQuestion(questions);
  }, []);

  return (
    <RadialGradient
      style={{flex: 1}}
      stops={[0.1, 0.9]}
      center={[200, 150]}
      radius={300}
      colors={['#F8F7FF', '#E9E5FF']}>
      <View
        style={{
          height: 150,
          width: '100%',
          flexDirection: 'row',
          paddingRight: 25,
          justifyContent: 'space-between',
          paddingTop: 25,
        }}>
        <View style={{width: '45%'}}>
          <DmzButton
            style={{
              Container: {
                marginTop: 25,
                elevation: 0,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                backgroundColor: '#E7E3FE',
                paddingHorizontal: 20,
                width: '90%',
              },
              Text: {
                color: 'rgba(255,255,255,0.79)',
              },
            }}
            text={'SKIP QUESTIONS'}
          />
        </View>

        <View style={{width: '45%'}}>
          <Image source={require('../../../assets/png/questionnaire1.png')} />
        </View>
      </View>
      {gettingQuestionnaire && (
        <ActivityIndicator size={40} color={'#9C77BC'} />
      )}
      {questions.length !== 0 && <QuestionController questions={questions} />}
    </RadialGradient>
  );
}

export default QuestionnairePP;

const QuestionController = ({questions, nested, nextQuestionParent}) => {
  console.log('called');
  const [count, setCount] = useState(0);
  const [root, setRoot] = useState(false);
  const ScrollRef = useRef(null);
  useEffect(() => {
    console.log('mounted');
    console.log('nested', nested);
    const root = questions.every((item) => item.root);
    setRoot(root);
    console.log('root', root);
  });
  const nextQuestion = () => {
    if (count < questions.length - 1) {
      // const root = questions.every((item) => item.root);
      setCount(count + 1);
    }
    if (count === questions.length - 1 && nested) {
      nextQuestionParent();
      setCount(count + 1);
    }
    if (count === questions.length - 1 && !nested) {
      alert('answers submited');
    }
  };
  // const onContinue = () => {
  //   if (count < questions.length - 1) {
  //     setCount(count + 1);
  //   }
  //   if (count === questions.length - 1) {
  //     alert('answers submited');
  //   }
  // };

  if (root) {
    return (
      <>
        <ScrollView
          ref={ScrollRef}
          onContentSizeChange={() => {
            ScrollRef.current.scrollToEnd({animated: true});
          }}>
          <QuestionViewer
            question={questions[count]}
            nextQuestion={nextQuestion}
          />
        </ScrollView>
        <View style={{marginBottom: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#AAA4C5',
              elevation: 4,
              alignSelf: 'center',
              borderRadius: 45,
              alignSelf: 'flex-end',
              marginRight: 40,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
            onPress={nextQuestion}>
            <Text
              style={{
                color: '#f8f7ff',
                fontSize: 16,
              }}>
              Skip
            </Text>
          </TouchableOpacity>
          <StepsTracker
            incompletedColor={'#fff'}
            completedColor={'#9C77BC'}
            text={`Question ${count + 1} of ${questions.length}`}
            completed={((count + 1) / questions.length) * 100}
            textStyle={{fontSize: 20, fontWeight: 'bold', color: '#9C77BC'}}
          />
        </View>
      </>
    );
  }

  return (
    <>
      <QuestionViewer question={questions[count]} nextQuestion={nextQuestion} />
    </>
  );
};
const QuestionViewer = ({question, nextQuestion}) => {
  const [currentOptionId, setCurrentOptionId] = useState('');
  const [filteredLinkedQuestion, setFilteredLinkedQuestion] = useState([]);

  // useState(() => {
  //   setFilteredLinkedQuestion([]); //
  //   ///deal with state,,
  //   //state is getting persist that's why the previous question is remains on there
  // }, []);
  const onSetCurrentOptionId = (id) => {
    console.log(id);
    setCurrentOptionId(id);
    const OptionQues = question.option.find((item) => item._id === id);
    console.log(OptionQues.linkedQuestion);
    setFilteredLinkedQuestion(OptionQues.linkedQuestion);
    if (OptionQues.linkedQuestion.length === 0) {
      nextQuestion();
    }
  };

  // console.log('&&&&&&&&&@@@@@@@@@@&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@7');
  // console.log(filteredLinkedQuestion);
  const customViewStyle = [
    {
      width: question && question.root ? '80%' : '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  ];
  const customTitleStyle = [
    {
      fontSize: question && question.root ? 38 : 20,
      lineHeight: question && question.root ? 40 : 22,
      fontWeight: 'bold',
      color: '#6859A1',
      marginTop: question && question.root ? 0 : 10,
    },
  ];
  console.log(question);
  return (
    <View style={customViewStyle}>
      <Text style={customTitleStyle}>{question ? question.title : ''}</Text>
      <RadioGroup
        Item={
          question &&
          question.option.map((item) => {
            if (item.optionType === 'radio')
              return {
                id: item._id,
                value: item.text,
              };
          })
        }
        setActiveKey={onSetCurrentOptionId}
        activeKey={currentOptionId}
      />
      {question &&
        question.option.map((item) => {
          if (item.optionType === 'text')
            return <AnimInput placeholder={item.text} />;
        })}
      {filteredLinkedQuestion.length ? (
        <QuestionController
          questions={filteredLinkedQuestion}
          nested
          nextQuestionParent={nextQuestion}
        />
      ) : null}
      {/* {(() => {
        if (filteredLinkedQuestion.length)
          return <QuestionController questions={filteredLinkedQuestion} />;
        else return null;
      })()} */}
    </View>
  );
};
