import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Events = () => {
  return (
    <>
      <h1>Events</h1>
      <p>
        Как и события HTML DOM, React может выполнять действия на основе
        пользовательских событий. React имеет те же события, что и HTML: щелчок,
        изменение, наведение мыши и т. д.
      </p>
      <p>
        События React записываются в синтаксисе camelCase, обработчики событий
        React записываются внутри фигурных скобок:
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`//React
<button onClick={shoot}>Take the Shot!</button>
//HTML
<button onclick="shoot()">Take the Shot!</button>`}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }
    
    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}`}</SyntaxHighlighter>
      <div className="rule">
        В React нельзя предотвратить обработчик события по умолчанию, вернув
        false. Нужно явно вызвать preventDefault.
      </div>
      <SyntaxHighlighter language="jsx" className="my-code">{`function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Отправлена форма.');
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <button type="submit">Отправить</button>
        </form>
    );
}`}</SyntaxHighlighter>
      <p>
        Чтобы передать аргумент обработчику событий, используйте стрелочную
        функцию.
      </p>
      <SyntaxHighlighter language="jsx" className="my-code">
        {`function Football() {
    const shoot = (a) => {
        alert(a);
    }
    
    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
}`}
      </SyntaxHighlighter>
      <p>
        Обработчики событий имеют доступ к событию React, вызвавшему функцию. В
        нашем примере это событие «щелчок».
      </p>
      <SyntaxHighlighter
        language="jsx"
        className="my-code"
      >{`function Football() {
    const shoot = (a, b) => {
        alert(b.type); // event, который вызвал функцию - click
    }
    
    return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
}`}</SyntaxHighlighter>
      <p>
        Обработчики событий получают экземпляр SyntheticEvent, это
        кроссбраузерная обёртка над нативным экземпляром события. У неё такой же
        интерфейс, как и у нативного события, включая методы stopPropagation() и
        preventDefault(). Эта обёртка помогает событиям работать одинаково во
        всех браузерах.
      </p>
      <p>
        Если вам всё-таки нужно получить нативное браузерное событие, обратитесь
        к атрибуту nativeEvent. Синтетические события отличаются от нативных
        событий браузера и непосредственно не связаны с ними.
      </p>
      <p>
        React нормализует события так, чтобы они содержали одинаковые свойства
        во всех браузерах. React поддерживает следующие события:
      </p>
      <ul>
        <li>События буфера обмена</li>
        <li>Композиционные события</li>
        <li>События клавиатуры</li>
        <li>События фокуса</li>
        <li>События формы</li>
        <li>Общие события</li>
        <li>События мыши</li>
        <li>События курсора</li>
        <li>События выбора</li>
        <li>Сенсорные события</li>
        <li>События UI</li>
        <li>События колёсика мыши</li>
        <li>События медиа-элементов</li>
        <li>События изображений</li>
        <li>События анимаций</li>
        <li>События переходов</li>
        <li>Другие события</li>
      </ul>
      <p>Список всех событий:</p>
      <ul>
        <li>onKeyDown</li>
        <li>onKeyPress</li>
        <li>onKeyUp</li>
        <li>onFocus</li>
        <li>onBlur</li>
        <li>onChange</li>
        <li>onInput</li>
        <li>onInvalid</li>
        <li>onReset</li>
        <li>onSubmit</li>
        <li>onError</li>
        <li>onLoad</li>
        <li>onClick</li>
        <li>onContextMenu</li>
        <li>onDoubleClick</li>
        <li>onDrag</li>
        <li>onDragEnd</li>
        <li>onDragEnter</li>
        <li>onDragExit</li>
        <li>onDragLeave</li>
        <li>onDragOver</li>
        <li>onDragStart</li>
        <li>onDrop</li>
        <li>onMouseDown</li>
        <li>onMouseEnter</li>
        <li>onMouseLeave</li>
        <li>onMouseMove</li>
        <li>onMouseOut</li>
        <li>onMouseOver</li>
        <li>onMouseUp</li>
        <li>onPointerDown</li>
        <li>onPointerMove</li>
        <li>onPointerUp</li>
        <li>onPointerCancel</li>
        <li>onGotPointerCapture</li>
        <li>onLostPointerCapture</li>
        <li>onPointerEnter</li>
        <li>onPointerLeave</li>
        <li>onPointerOver</li>
        <li>onPointerOut</li>
        <li>onSelect</li>
        <li>onTouchCancel</li>
        <li>onTouchEnd</li>
        <li>onTouchMove</li>
        <li>onTouchStart</li>
        <li>onScroll</li>
        <li>onWheel</li>
        <li>onAbort</li>
        <li>onCanPlay</li>
        <li>onCanPlayThrough</li>
        <li>onDurationChange</li>
        <li>onEmptied</li>
        <li>onEncrypted</li>
        <li>onEnded</li>
        <li>onLoadedData</li>
        <li>onLoadedMetadata</li>
        <li>onLoadStart</li>
        <li>onPause</li>
        <li>onPlay</li>
        <li>onPlaying</li>
        <li>onProgress</li>
        <li>onRateChange</li>
        <li>onSeeked</li>
        <li>onSeeking</li>
        <li>onStalled</li>
        <li>onSuspend</li>
        <li>onTimeUpdate</li>
        <li>onVolumeChange</li>
        <li>onWaiting</li>
        <li>onAnimationStart</li>
        <li>onAnimationEnd</li>
        <li>onAnimationIteration</li>
        <li>onTransitionEnd</li>
        <li>onToggle</li>
      </ul>
    </>
  );
};
export default Events;
