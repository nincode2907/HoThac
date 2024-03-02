import React, { useState } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';
import data from "./storage.js"

const CARDS = 10;
const MAX_VISIBILITY = 3;
const LINK_HO_THAC_GG_MAPS = "https://www.google.com/maps/place/H%E1%BB%91+Th%C3%A1c/@15.6017951,108.3134798,17z/data=!4m8!3m7!1s0x3169e57f4a1d0ed3:0x145b49262cba41d7!8m2!3d15.6017899!4d108.3160547!9m1!1b1!16s%2Fg%2F11ffl_bcp4?entry=ttu"

const Card = ({ avatar, title, content, numStar }) =>
    React.createElement("div", { className: "card" },
        React.createElement("img", { className: "avatar", src: avatar }),
        React.createElement("h2", null, title),
        // create element stars with quantity numStar
        React.createElement("div", { className: "card_star" },
            [...new Array(numStar)].map((_, i) =>
                React.createElement("span", { className: "star", key: i }, "★")),
            [...new Array(5 - numStar)].map((_, i) =>
                React.createElement("span", { className: "star", key: i }, "☆")),
        ),
        React.createElement("p", null, content));

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        React.createElement("div", { className: "carousel_reviews" },
            active > 0 && React.createElement("button", { className: "nav left", onClick: () => setActive(i => i - 1) }, React.createElement(TiChevronLeftOutline, null)),
            React.Children.map(children, (child, i) =>
                React.createElement("div", {
                    className: "card-container", style: {
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointer-events': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
                    }
                },

                    child)),


            active < count - 1 && React.createElement("button", { className: "nav right", onClick: () => setActive(i => i + 1) }, React.createElement(TiChevronRightOutline, null))));


};

const App = () =>
    React.createElement("div", { className: "app" },
        React.createElement(Carousel, null,
            [...new Array(CARDS)].map((_, i) => {
                const review = data.reviews[i].review;
                const content = review.includes("https") ? React.createElement("img", { src: review, className: "card_content_img" }) : review;
                return React.createElement(Card, { avatar: data.reviews[i].avatar, title: data.reviews[i].name, content, numStar: data.reviews[i].star });
            })),
        React.createElement("a", { href: LINK_HO_THAC_GG_MAPS, target: "_blank", className: "custom-btn" }, 
            React.createElement("span", null, "Xem thêm trên Google Maps")),
    );

ReactDOM.render(
    React.createElement(App, null),
    

    document.querySelector(".content_reviews"),
);
