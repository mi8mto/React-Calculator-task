import { useState } from 'react';
import styles from './MyCalc.module.css';

export const MyCalc = () => {
	// Состояния для операндов, оператора и отображения результата
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false); // Новый флаг для изменения цвета дисплея

	// Массив кнопок
	const BUTTONS = [
		'1',
		'2',
		'3',
		'+',
		'4',
		'5',
		'6',
		'-',
		'7',
		'8',
		'9',
		'*',
		'/',
		'0',
		'C',
		'=',
	];

	// Обработчик кликов
	const handleClick = (btn) => {
		if (['+', '-', '*', '/'].includes(btn)) {
			if (operand1 && !operator) {
				setOperator(btn);
				setIsResult(false); // Возврат цвета дисплея к исходному
			}
		} else if (btn === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setIsResult(false); // Сброс цвета дисплея
		} else if (btn === '=') {
			if (operand1 && operator && operand2) {
				const num1 = parseInt(operand1, 10);
				const num2 = parseInt(operand2, 10);
				let result;
				switch (operator) {
					case '+':
						result = num1 + num2;
						break;
					case '-':
						result = num1 - num2;
						break;
					case '*':
						result = num1 * num2;
						break;
					case '/':
						result = num2 !== 0 ? Math.floor(num1 / num2) : 'Error'; // Проверка деления на 0
						break;
					default:
						result = '';
				}

				setOperand1(result.toString());
				setOperator('');
				setOperand2('');
				setIsResult(true); // Ставим цвет результата синий
			}
		} else {
			// Нажата цифра
			if (!operator) {
				setOperand1((prev) => prev + btn);
			} else {
				setOperand2((prev) => prev + btn);
			}
			setIsResult(false); // Цвет дисплея к исходному при вводе цифры
		}
		// console.log({ btn });
	};

	return (
		<div className={styles.calculator}>
			<div className={`${styles.display} ${isResult ? styles.result : ''}`}>
				{operand1} {operator} {operand2}
			</div>
			<div className={styles.buttons}>
				{BUTTONS.map((btn, index) => (
					<button
						key={index}
						className={styles.button}
						onClick={() => handleClick(btn)}
					>
						{btn}
					</button>
				))}
			</div>
		</div>
	);
};
