import axios from "axios";

export const fetchDefautTesting = (url) => {
    try {
        return [{id: 1, name:"testing1", action: "running"}, {id:2, name:"testing2", action: "swimming"}];
    }catch (err){
        console.log(err);
    }
};
