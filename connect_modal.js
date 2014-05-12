jQuery("#provider-list li.row label.col-xs-11").on("click",function(e){
var modalBname="connect accounts|itunes";
if(modalBname) {
utag.link({application_element_name:modalBname,
                       application_clicks:"true"});
return;}
});

jQuery(".linkAccountCTA").on("click",function(e){
var modalBname="connect overlay|lets connect";
if(modalBname) {
utag.link({application_element_name:modalBname,
                       application_clicks:"true"});
return;}
});
