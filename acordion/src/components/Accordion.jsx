export default function Accordion({
  qna,
  isOpen,
  onToggle,
}) {
  return (
    <div className="accordion">
      <h3>
        {qna.question}

        <button onClick={onToggle}>
          {isOpen ? "-" : "+"}
        </button>
      </h3>

      {isOpen && <p>{qna.answer}</p>}
    </div>
  );
}