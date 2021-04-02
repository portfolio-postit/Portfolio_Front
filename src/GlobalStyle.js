import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "SangSangShinb7";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.1/SangSangShinb7.woff")
        format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

    * {
        font-family:Noto Sans KR !important;
    }
    *::-webkit-scrollbar {
        display: none;
    }
    .sc-fznZeY {
        height: 100%;
    }
    #root {
        height: 100%;
    }
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background-color:#FAFAFA;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        overscroll-behavior-y: contain;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
  

`;

export const GlobalContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
