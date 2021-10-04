import {  addDays } from "date-fns"
const app =()=>{
	const date = new Date()
	let addDays = addDays(date,1)
	console.log(addDays)
}
app()