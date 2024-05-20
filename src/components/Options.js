function Options({ question, dispatch, answer }) {
  const hasAnswered = (answer !== null)

  function getButtonClassName(question, i) {
    let buttonClassName = 'btn btn-option';
    if (hasAnswered) {
      if (answer === i) {
        buttonClassName += ' answer';
      }
      if (i === question.correctOption) {
        buttonClassName += ' correct';
      } else {
        buttonClassName += ' wrong';
      }
    }
    return buttonClassName;
  }

  return (
    <div className="options">
      {question.options.map((option, i) => {
        const className = getButtonClassName(question, i);
        return <button
          className={className}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: i })}
        >{option}</button>
      })}
    </div>
  );
}
export default Options;
