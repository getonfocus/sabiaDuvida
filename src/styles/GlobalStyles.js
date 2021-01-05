import { createGlobalStyle } from 'styled-components';

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
  ${normalize};

  /* ↓↓↓ header section ↓↓↓ */
  header img {
    width: 60% !important;
    height: 60% !important;
  }
  /* ↑↑↑ header section ↑↑↑ */


  /* ↓↓↓ modal - Events.js ↓↓↓ */
  .ReactModal__Overlay {
      opacity: 0;
      transition: opacity 250ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
  #modal__close {
    position: absolute;
    top: 0px;
    right: 0px;
    border: 1px solid #8bd8ed;
    width: 100px;
    height: 40px;
  }
  /* ↑↑↑ modal - Events.js ↑↑↑ */

  /* ↓↓↓ first set of calendar ↓↓↓ */
  .list-block-wrapper {
    padding-top: 20px; 
  }
  .list-block {
    padding: 10px 0;    
    transition: all 0.3s ease; 
  }
  .media-left, .media-right, .media-body {
      display: table-cell;
      vertical-align: top;
  }
  .media-left {
      padding-right: 20px;
  }
  @media only screen and (min-width: 768px) {
    .list-block {
      /* padding: 20px; */
      } 
  }
  .list-block:hover {
    /* background-color: #80ced6; */
  }
  .list-block:first-child {
    /* border-top: 1px solid #cccccc; */
  }
  .list-block.attachments-preview {
    padding: 10px 5px; 
  }
  @media only screen and (min-width: 768px) {
    .list-block.attachments-preview {
      /* padding: 20px; */
      } 
  }
  /* */
  .calendar-preview a {
    color: #618114; 
  }
  .calendar-preview a:hover, .calendar-preview a:active, .calendar-preview a:focus {
    color: #618114; 
  }
  .calendar-preview h4 {
    margin-top: 0;
    margin-bottom: 5px; 
  }
  .calendar-preview time {
    display: block;
    margin-bottom: 5px; 
  }
  /* */
  /* styling for calendar blocks */
  .cal-wrapper {
    width: 80px;
    height: 60px; 
  }
  .cal-wrapper .cal-month {
    width: 100%;
    height: 40px;
    background-color: #8bd8ed; 
  }
  .cal-wrapper .cal-month span {
    /* font size declared absolutely to keep consistency */
    font-size: 18px;
    color: #000;
    display: block;
    text-align: center;
    padding-top: 10px;
  }
  .cal-wrapper .cal-day {
    background-color: #ffffff;
    border-bottom: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    width: 80px;
    height: 48px; }
    
  .cal-wrapper .cal-day span {
    /* font size declared absolutely to keep consistency */
    font-size: 1.8em;
    color: #666666;
    display: block;
    text-align: center;
    padding-top: 8px; 
  }
  .btn__event {
    display: block;
    border: 1px solid #8bd8ed;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
  }
  /* ↑↑↑ first set of calendar ↑↑↑ */


  /* ↓↓↓ contact form ↓↓↓ */
  #contact {
    background: #F9F9F9;
    padding: 25px;
    margin: 0 auto;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }

  #contact input[type="text"]:hover,
  #contact input[type="email"]:hover,
  #contact input[type="tel"]:hover,
  #contact input[type="url"]:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #4CAF50;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #contact button[type="submit"]:hover {
    background: #43A047;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }
  /* ↑↑↑ contact form ↑↑↑ */

  body {
    font-family: ${props => props.theme.font.secondary};
  }

  h1, h2, h3, p {
    margin: 0;
    font-weight: normal;
  }

  h1, h2 {
    font-family: ${props => props.theme.font.primary};
  }

  h1 {
    ${props => props.theme.font_size.xlarge};
  }

  h2 {
    ${props => props.theme.font_size.larger};
  }

  h3 {
    ${props => props.theme.font_size.large};
  }

  p {
    ${props => props.theme.font_size.regular};
    color: ${props => props.theme.color.black.light};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.larger};
    }

    h2 {
      ${props => props.theme.font_size.large};
    }

    h3 {
      ${props => props.theme.font_size.regular};
    }

    p {
      ${props => props.theme.font_size.small};
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyles;
