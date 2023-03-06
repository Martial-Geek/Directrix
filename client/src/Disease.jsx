import React from "react";

class Disease extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:8080/disease")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleases wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Disease Fetch</h1>  {
                // items.map((item) => ( 
                // <p>{item.message}</p>
                // ))
                // console.log(this.state)
                <p>{items.message}</p>
            }
        </div>
    );
}
}

export default Disease;


