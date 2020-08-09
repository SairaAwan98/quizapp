function checkAns(){
    var score = 0
    var right_ans_1 = document.getElementById("q1-a2")
    var q1_ans_2 = document.getElementById("q1-a2")
    var q1_ans_3 = document.getElementById("q1-a3")
    var q1_ans_4 = document.getElementById("q1-a4")
    if(right_ans_1.checked == true){
        score++
    }



    var right_ans_2 = document.getElementById("q2-a3")
    var q2_ans_2 = document.getElementById("q2-a2")
    var q2_ans_3 = document.getElementById("q2-a1")
    var q2_ans_4 = document.getElementById("q2-a4")
    if(right_ans_2.checked == true){
        score++
        
    }


    var right_ans_3 = document.getElementById("q3-a2")
    var q3_ans_2 = document.getElementById("q3-a2")
    var q3_ans_3 = document.getElementById("q3-a3")
    var q3_ans_4 = document.getElementById("q3-a4")
    if(right_ans_3.checked == true){
        score++
        
    }

    var right_ans_4 = document.getElementById("q4-a3")
    var q4_ans_2 = document.getElementById("q4-a2")
    var q4_ans_3 = document.getElementById("q4-a1")
    var q4_ans_4 = document.getElementById("q4-a4")
    if(right_ans_4.checked == true){
        score++
        
    }
    alert("your score is "+ score)


}