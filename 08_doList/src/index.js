import {  addDays } from "date-fns"
const app =()=>{
	const date = new Date()
	let asd = addDays(date,1)
	console.log(asd)
}
app()