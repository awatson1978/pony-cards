

Template.pageNavHeader.helpers({
  rendered: function(){

  }
});

Template.pageNavHeader.events({
  "click .listButton": function(event, template){
    Router.go('/list/foos');
  },
  "click .imageGridButton": function(event, template){
    Router.go('/grid/foos');
  },
  "click .tableButton": function(event, template){
    Router.go('/table/foos');
  }
});
