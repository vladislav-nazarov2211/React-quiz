import './App.css';
import React, { useEffect, useState } from 'react';
import { Router } from './router/Router';
import { db}  from "./firebase";
import { ref, onValue } from "firebase/database"
import { setQuestions, setTotalCards, setPercent } from './redux-toolkit/slices/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux-toolkit/store/store';

function App() {
	const currentCardQuestion = useSelector((state: RootState) => state.questions.currentCardQuestion)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(setQuestions(
			[
				{
				question: "Сколько полос на флаге США?",
				values: ["16", "15", "10", "13"],
				correct: "13"
				},
				{
				question: "Какое национальное животное Австралии?",
				values: ["Кенгуру", "Кошка", "Собака", "Лев"],
				correct: "Кенгуру"
				},
				{
				question: "Сколько дней нужно, чтобы Земля совершила оборот вокруг Солнца?",
				values: ["153", "215", "365", "413"],
				correct: "365"
				},
				{
				question: "Какая валюта Дании?",
				values: ["Евро", "Рубль", "Доллар", "Крона"],
				correct: "Крона"
				},
				{
				question: "Сколько элементов в периодической таблице?",
				values: ["161", "118", "120", "103"],
				correct: "118"
				}
			]
		))
		dispatch(setTotalCards())
		dispatch(setPercent(currentCardQuestion))
	}, [])

  	return (
		<Router />
	);
}

export default App;


// useEffect(() => {
// 	const questions = ref(db, "questions");
// 	console.log(questions)
// 	onValue(questions, (snapshot) => {
// 		console.log(snapshot)
// 		const data = snapshot.val()
// 		dispatch(setQuestions(data))
// 		dispatch(setTotalCards())
// 		dispatch(setPercent(currentCardQuestion))
// 	});
// }, [])