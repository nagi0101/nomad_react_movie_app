import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location:{state}, history:{push}} = this.props;
        if (state === undefined){
            push("/");
        }
    }
    render(){
        const {location:{state}} = this.props;
        if(state){
            return <span>{state.title}</span>
        }else{
            return null;
        }
    }
}

export default Detail;