define(["underscore"],function(a){"use strict";return{defaults:{options:{value:null,operator:null,parameters:{}}},initialize:function(){this.$container=$("<div/>"),this.instanceName=a.uniqueId("condition-tags-"),this.value=this.options.value,this.$el.append(this.$container),this.$el.data("value",this.options.value),this.sandbox.start([{name:"auto-complete@husky",options:{el:this.$container,instanceName:this.instanceName,value:this.data,prefetchUrl:this.options.parameters.prefetchUrl,remoteUrl:this.options.parameters.remoteUrl,getParameter:this.options.parameters.searchParameter||"search",resultKey:this.options.parameters.resultKey,valueKey:this.options.parameters.valueKey}}]),this.sandbox.on("husky.auto-complete."+this.instanceName+".select",function(a){this.value=a.id,this.$el.data("value",this.value),this.$el.trigger("change")}.bind(this))},loadComponentData:function(){var a=$.Deferred();return this.options.value?(this.sandbox.util.load(this.options.parameters.singleUrl.replace("{id}",this.options.value)).then(function(b){a.resolve(b)}.bind(this)),a.promise()):(a.resolve(),a.promise())}}});