import React ,{useState} from "react";
import './details.css';

export default function EmailRestaurant(){

    const [details,setDetails] = useState('');

    const check = ()=>{
        if(details.name == null || details.restaurantName == null
             || details.email == null || details.phoneNumber == null){
            alert('you must to fill your details');
            return;
        }
        if(details.name.length <= 1){
            alert('incorrect Name');
            return;
        }
        else if(details.restaurantName.length <= 2){
            alert('incorrect Restaurant name');
            return;
        }
        else if(details.email.length <= 5 || details.email.indexOf('@') == -1){
            alert('incorrect Email');
            return;
        }
        else if(details.phoneNumber.length <= 5)
            return alert('The Phone Number is too short');
        else{
            for(let i = 0;i < details.phoneNumber.length;i++)
                if(details.phoneNumber.charAt(i) < '0' || details.phoneNumber.charAt(i) > '9')
                    return alert('Incorrect Phone Number');
        }
        return alert('success');
    }


    return (
        <div id="emailDiv">
            <div className="yellow-div">
                <h1>"The AI-based digital waiter has helped us to boost sales and eliminate the need for additional waitstaff. it's a game changer!"</h1>
            </div>
            <div id="container">
                <h1>Join the future of dining with <br/>LATWO<span>.</span></h1><br/>
                <input type ='text' className="details small" required='required' onChange={(element)=>{setDetails({...details,name: element.target.value})}} placeholder="Name"/>
                <input type ="text" className="details small" required='required' onChange={(element)=>{setDetails({...details,phoneNumber: element.target.value})}} placeholder="Phone number"/><br/>
                <input type ='text' className="details" required='required' onChange={(element)=>{setDetails({...details,restaurantName: element.target.value})}} placeholder="Restaurant name"/><br/>
                <input type ='text' className="details" required='required' placeholder="Restaurant name"/><br/>
                <input type ='text' className="details" required='required' placeholder="Restaurant name"/><br/>
                <input type ='text' className="details" required='required' placeholder="Restaurant name"/><br/>
                <input type ="email" className="details" required='required' onChange={(element)=>{setDetails({...details,email: element.target.value})}} placeholder="Enter your Email..."/><br/>
                <button className="submit" onClick={()=>{check()}}>Submit</button> <br/>
                <button className="log-in">Already registered? Try to log in</button>
            </div>
        </div>
    )
}