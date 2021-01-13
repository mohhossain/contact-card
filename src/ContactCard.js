import React from 'react'

class ContactCard extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.cards)
    }
    render(){
        return(<div>
            {Array.from(this.props.cards).map((r) => (
                <div>
                    <h3>{r.name}</h3>
                    <p>Mobile: {r.mobileNumber}</p>
                    <p>Email: {r.email}</p>
                    <p>Work: {r.workPhone}</p>
                </div>
            
          ))}
        </div>)
        
         
    }
}

export default ContactCard;