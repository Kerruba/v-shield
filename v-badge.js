(function(){
	"use strict";

	var BadgeComponent = Vue.extend({
		template: "<img :src='url' />",
		
		props: {
			key: String,
			value: String,
			color: String,
			style: {
				type: String,
				default: "flat",
				// validator: function(value) {
				// 	var validValues = ["flat","plastic","flat-square","social"];
				// 	return (validValues.indexOf(value) > -1);
				// }
			}
		},
		computed: {
			url: function() {
				var url = "https://img.shields.io/badge/" + this.key + "-" + this.value + "-" + this.color + ".svg?style=" + this.style; 
				console.log(url);
				return url;
			},
		}
	});
})();

