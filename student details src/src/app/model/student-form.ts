
export class StudentForm {

	constructor(id:number,name:string,address:string,mob:DoubleRange,email:string)

	{
		this.sid=id;
		this.sname=name;
		this.address=address;
		this.mobno=mob;
		this.email=email

	}
    sid:number;
	sname:string;
	address:string;
	mobno:DoubleRange;
	email:string;
}
