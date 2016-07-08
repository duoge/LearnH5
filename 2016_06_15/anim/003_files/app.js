/**
 * Created by plter on 4/20/16.
 */


(function () {

    var Constants = {IMAGE_BASE_URL: "images/"};

    function Card() {
        return {
            imgAUrl: null, imgBUrl: null,

            cardInit: function (imgAUrl, imgBUrl) {
                this.imgAUrl = imgAUrl;
                this.imgBUrl = imgBUrl;

                return this;
            },

            getDomHtmlString: function () {
                return "<div class='card_container'>" +
                    "<div class='card_a card card_page'><img src='" + Constants.IMAGE_BASE_URL + this.imgAUrl + "'></div>" +
                    "<div class='card_b card card_page'><img src='" + Constants.IMAGE_BASE_URL + this.imgBUrl + "'></div>" +
                    "</div>";
            }
        };
    }


    function App() {
        return {
            cards: null, cardsHtml: null, scene: null,
            imgUrls: ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "008.jpg", "009.jpg", "010.jpg", "011.jpg", "012.jpg", "013.png", "014.jpg", "015.jpg", "016.jpg", "017.jpg", "018.jpg", "019.jpg", "020.jpg", "021.jpg", "022.jpg"],


            appInit: function () {

                this.scene = $("#scene");
                this.cards = this.createCards();
                this.cardsHtml = this.getCardsHtml(this.cards);
                this.scene.html(this.cardsHtml);

                $(".card_container").hover(function (e) {
                    $(this).find(".card_a").toggleClass("card_a_hovered");
                    $(this).find(".card_b").toggleClass("card_b_hovered");
                });

                return this;
            },

            createCards: function () {
                var cards = [];
                for (var i = 0; i < this.imgUrls.length; i += 2) {
                    cards.push(Card().cardInit(this.imgUrls[i], this.imgUrls[i + 1]));
                }
                return cards;
            },

            getCardsHtml: function (cards) {
                var html = "";
                cards.forEach(function (c) {
                    html += c.getDomHtmlString();
                });
                return html;
            }
        };
    }

    App().appInit();
}());