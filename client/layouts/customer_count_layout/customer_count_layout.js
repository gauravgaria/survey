Template.customer_count_layout.events({
    'click li':function(event){
        $('li').removeClass('active');
        $(event.currentTarget).addClass('active');
    }
});