define([
   "js/Poem"
], function(Poem){

    var Sowol = Poem.extend({

        poem : "나보기가 역겨워<br>\
                가실때에는<br>\
                말없이 고이 보내드리우리다<br>\
                <br>\
                영변의 약산<br>\
                진달래꽃<br>\
                아름따다 가실 길을 뿌리우리다<br>\
                <br>\
                가시는 걸음 걸음<br>\
                놓인 그 꽃을<br>\
                사뿐히 즈려밟고 가시옵소서<br>\
                <br>\
                나보기가 역겨워<br>\
                가실때에는<br>\
                죽어도 아니 눈물 흘리우리다",

        recite : function(){
            this.$el.append("<p>" + this.poem + "</p>");
        }

    });

    return Sowol;


});
