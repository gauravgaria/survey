/*
var student = FlowRouter.group({
    prefix:'/students'
});

student.route('/',{
    action:function(){
        console.log("Root url ");
    }
});

 /!* /students/name *!/

student.route('/:name',{
    action:function(params){
        console.log("now we are in student name " + params);
    }
});

student.route('/:name/:marks',{
    action:function(params){

        console.log("marks of the student " + JSON.stringify(params));
    }
})*/


FlowRouter.route('/survey',{
    action:function(){
        BlazeLayout.render('surveyLayout',{
           header:'header_layout',
           content:'customer_count_layout',
           footer:'footer_layout'
        });
    }
})