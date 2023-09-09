import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import api from "./utils/api";
import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import ContentHeader from "./components/ContentHeader/ContentHeader";

function App() {
  const [cards, setCards] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);

  function onFilter(section) {
    setSelectedSection(section);
  }

  useEffect(() => {
    api.getProductList()
      .then(({ elements, sections }) => {
        const cards = Object.values(elements);

        setCards(cards);
        setSections(sections);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main className="content container">
        <ContentHeader title="Каталог товаров" />
        <CardList
          cards={cards.filter((card) =>
            !selectedSection || selectedSection?.items?.includes(card.id)
          )}
          sections={sections}
          onFilter={onFilter}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;