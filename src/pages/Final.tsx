import React from 'react';
import images1 from './../img/icons/clapping.svg'
import images2 from './../img/icons/leaflet.svg'
import images3 from './../img/icons/video-tutorial.png'

export const Final = () => {
    return (
        <div className="plate">
		<div className="cover-content-wrapper">
			<div className="cover-content">

				<img className="title-img" width="70" src={images1} alt="Спасибо!" />
				<div className="title">Спасибо!</div>
				<p>Результаты вашего теста и методичка, уже отправлены вам на Email.</p>
				<div className="title-2">Ваши бонусы:</div>
				<div className="bonus-cards-wrapper">
					<div className="bonus-card">
						<img className="bonus-card__img" src={images2} alt="" />
						<div className="bonus-card__title">Методичка с курса по верстке</div>
					</div>
					<div className="bonus-card">
						<img className="bonus-card__img" src={images3} alt="" />
						<div className="bonus-card__title">Видео урок с курса по верстке</div>
					</div>
				</div>

			</div>
		</div>
	</div>
    )
}



