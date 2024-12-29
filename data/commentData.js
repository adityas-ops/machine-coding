"use client "

 const commentData = [
    {
        id:1,
        autherName:"Aditya",
        comment:"This is a great article",
        date:"2021-09-01",
        time:"12:00",
        likes:0,
        replies:[
            {
                id:2,
                autherName:"Ben",
                comment:"I agree",
                date:"2021-09-01",
                time:"12:00",
                likes:0,
                replies:[]
            },
            {
                id:3,
                autherName:"Charlie",
                comment:"I disagree",
                date:"2021-09-01",
                time:"12:00",
                likes:0,
                replies:[
                    {
                        id:4,
                        autherName:"David",
                        comment:"I agree with Adi",
                        date:"2021-09-01",
                        time:"12:00",
                        likes:0,
                        replies:[]
                    }
                ]
            }
        ]
    }
 ]



    export default commentData