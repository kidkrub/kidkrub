import React, { useState, useEffect } from 'react';
import './Terminal.css';

function Terminal() {
  const [contents, setContents] = useState([
    `
  Welecome to my portfolio
  <br />
  If you're interested by my porfolio you can type "help" to see available commands and get started. Thanks.`
  ]);
  const [history, setHistory] = useState([]);

  const onEnter = (inputhist, newcontent) => {
    setHistory([...history, [inputhist]]);
    setContents([...contents, [newcontent]]);
  };
  const clearScreen = () => {
    setContents([]);
  };
  return (
    <div className="terminal" data-content="kidkrub">
      <div className="body">
        <Content item={contents} />
        <Input onEnter={onEnter} onCls={clearScreen} />
      </div>
    </div>
  );
}

function Content(props) {
  const messageEnd = React.createRef();
  useEffect(() => {
    messageEnd.current.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <div>
      {props.item.map(c => (
        <div dangerouslySetInnerHTML={{ __html: c }} />
      ))}
      <div ref={messageEnd}></div>
    </div>
  );
}

function Input(props) {
  const [inputText, setInputText] = useState([]);
  useEffect(() => {
    document.addEventListener('keypress', getPrintableKey);
    document.addEventListener('keydown', getUniKey);
    return function cleanup() {
      document.removeEventListener('keypress', getPrintableKey);
      document.removeEventListener('keydown', getUniKey);
    };
  });
  function getPrintableKey(e) {
    if (e.key === 'Enter') return;
    setInputText([...inputText, e.key]);
  }
  function getUniKey(e) {
    switch (e.key) {
      case 'Enter':
        const s = inputText.join('');
        praseCommand(s);
        break;
      case 'Backspace':
        e.preventDefault();
        setInputText(inputText.slice(0, -1));
        break;
      default:
        return;
    }
  }
  function praseCommand(s) {
    const [cmd, ...args] = s.split(' ');
    switch (cmd) {
      case 'help':
        help(...args);
        setInputText([]);
        break;
      case 'cls':
        cls(...args);
        setInputText([]);
        break;
      case 'ls':
        ls(...args);
        setInputText([]);
        break;
      case 'cat':
        cat(...args);
        setInputText([]);
        break;
      default:
        props.onEnter(s, `Unknow command ${cmd}`);
        setInputText([]);
    }
  }
  function help() {
    props.onEnter(
      inputText,
      `
    <div class="help">
      <div>ls</div><div>list directory contents</div>
      <div>cat</div><div>concatenate and print files</div>
    </div>
    `
    );
  }
  function cat(...args) {
    switch (args[0]) {
      case 'profile':
        props.onEnter(
          inputText,
          `
        Name: Kritsada Moungkhao <br/>
        Birth date: 03/05/1996 <br/>
        Hobbie: Read books, play games<br />
        Current job: Junior Developer at Atvantage
        `
        );
        break;
      case 'contact':
        props.onEnter(inputText, `kritsadamoungkhao@gmail.com`);
        break;
      default:
        props.onEnter(
          inputText,
          `
          file not found
          `
        );
    }
  }

  function ls(...args) {
    props.onEnter(inputText, `profile contact`);
  }
  function cls() {
    props.onCls();
  }
  return (
    <pre>
      {inputText}
      <span className="blink"></span>
    </pre>
  );
}

export default Terminal;
