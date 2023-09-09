import "./Card.css";

const Card = ({id, title, src, price}) => {
    return (
       <div className="card">
            <img src={`https://moscow.fargospc.ru/${src}`} className='card__image' alt={title}/>
            <p className='card__name'>{title}</p>
            <div className='card__desc'>
                {/* &nbsp; - неразры́вный пробе́л, говорит что то что справа от него (₽) и то что слева от него не должны быть разделимо, между ними не должно быть переноса, на др. строку переносятся вместе// Условие, если скидка не равна нулю, то добавляем класс (красная цена товара), а если нет, то добавляем класс, где цена товара черная */}
                <span className={price !== 0 ? 'card__old-price' : 'card__price'}>{price}&nbsp;₽</span>
            </div>
       </div>
    )
}

export default Card;