"use strict";require(["../../static/conf/config.js"],function(){require(["jquery","lodash"],function(r,t){r("input").on("focusin",function(){r(this).parent().parent().children(".error").hide(),r(this).parent().parent().children(".focus_text").show(),r(this).parent().parent().css({"box-shadow":"0 0 4px rgba(165,212,237,.075)"})}),r("input").on("focusout",function(){r(this).parent().parent().children(".focus_text").hide(),r(this).parent().parent().css({"box-shadow":"0"})}),console.log(r("#telPhone").val()),r("#telPhone").blur(function(t){/\d{11}/.test(r("#telPhone").val())||""==r(this).val()||r(this).parent().parent().children(".error").show()}),r("#code").blur(function(t){/[a-zA-Z0-9]{6}/.test(r("#telPhone").val())||""==r(this).val()||r(this).parent().parent().children(".error").show()}),r("#pwd").blur(function(t){/.{6,}/.test(r("#pwd").val())||""==r(this).val()||(r(this).parent().parent().children(".error").hide(),r(this).parent().parent().children(".error1").show()),/^(?:\d*|[a-zA-Z]*|[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]*)$/.test(r("#pwd").val())&&""!=r(this).val()&&(r(this).parent().parent().children(".error1").hide(),r(this).parent().parent().children(".error").show())}),r("#pwdAgain").blur(function(t){r("#pwdAgain").val()!=r("#pwd").val()&&""!=r(this).val()&&r(this).parent().parent().children(".error").show()})})});