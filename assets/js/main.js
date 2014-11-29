/*
var submitSearch = function(ev){
    $("#items").find("li").remove();
    $("#breadcrumb").find("li").remove();
    $("#breadcrumb").append(
            '<li><a id="homeLink" href="#">Home</a></li>'+
            '<li class="active">Search results</li>');
    $("#homeLink").click(homePage);
    $("#rowbreadcrumb").show();
    $("#featured-product-carousel").hide();
    $("#searchForm").hide();
    $("#custom-search").show();
    ev.preventDefault();

};

var homePage = function(){
    $("#featured-product-carousel").show();
    $("#searchForm").show();
    $("#custom-search").hide();
    $("#rowbreadcrumb").hide();
    $("#items").find("li").remove();

};

$("#searchForm").submit(submitSearch);
$("#customSearchForm").submit(submitSearch);
$(".home-link").click(homePage);
$(".search-link").click(submitSearch);
*
 ('#slider1').slider().on('slide', function(ev){
    $("#currentPriceLow").val(ev.value[0]);
    $("#currentPriceHigh").val(ev.value[1]);
});

$('#datetimepicker2').datetimepicker();
$("#dataError").hide();
*/

var submitSearch = function(ev){

    $("#homepage").hide();
    $("#searchForm").hide();
    $("#searchpage").show();
	event.preventDefault();
	$('#slider1').slider().on('slide', function(ev){
    $("#currentPriceLow").val(ev.value[0]);
    $("#currentPriceHigh").val(ev.value[1]);
	});
	
    
	};
var homePage = function(){
    $("#homepage").show();
    $("#searchForm").show();
    $("#searchpage").hide();
};

	
	$("#searchForm").submit(submitSearch);
	$(".home-link").click(homePage);
