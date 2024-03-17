import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(LanguageDetector)
	.use(Backend)
	.use(initReactI18next)
	.init({
		lng: "ru",
		resources: {
			en: {
				translation: {
					registration: {
						title: "Registration",
						haveAccount: "Already have an account? Sign in",
						btnText: "Sign up",
					},
					authorization: {
						title: "Authorization",
						haveAccount: "Dont have an account? Sign up",
						btnText: "Sign in"
					},
					menu: {
						noProducts: "No products found..."
					},
					navbar: {
						menu: "Menu",
						orders: "Orders"
					},
					productCard: {
						toCart: "Add to cart"
					},
					history: {
						title: "Your orders",
						card: {
							orderNumber: "Order",
							cost: "Cost",
							address: "Address",
							payment: "Payment method",
							products: "Products",
							name: "Title",
							price: "Price",
							quantity: "Quantity"
						},
						noOrders: "No orders found..."
					},
					cart: {
						totalCost: "Total cost",
						title: "Make an order",
						empty: "Your shopping cart is empty...",
						form: {
							title: "Fill out the order form",
							address: "Enter your address",
							method: {
								cash: "Cash",
								byCard: "Card",
								notSelected: "Payment by:",
							},
							order: "Order",
							delete: "Delete"
						}
					},
					form: {
						emailError: "Incorrect e-mail entry form",
						passwordError: "Minimum password length: 6 characters",
						passwordPlaceholder: "Enter your password",
						namePlaceholder: "Enter your name",
						onlyLetters: "Only letters can be used"
					},
					successOrder: {
						thanks: "thank you for order!",
						order: {
							first: "Your order",
							second: "successfully issued!"
						}
					},
					error: "Something went wrong..."
				},
			},
			ru: {
				translation: {
					registration: {
						title: "Регистрация",
						haveAccount: "Есть аккаунт? Войти",
						btnText: "Зарегистрироваться",
					},
					authorization: {
						title: "Вход",
						haveAccount: "Нет аккаунта? Зарегистрироваться",
						btnText: "Войти"
					},
					navbar: {
						menu: "Меню",
						orders: "Заказы"
					},
					menu: {
						noProducts: "Продуктов не найдено..."
					},
					productCard: {
						toCart: "Добавить в корзину"
					},
					history: {
						title: "Ваши заказы",
						card: {
							orderNumber: "Номер заказа",
							cost: "Стоимость",
							address: "Адрес",
							payment: "Метод оплаты",
							products: "Продукты",
							name: "Название",
							price: "Цена",
							quantity: "Количество"
						},
						noOrders: "Заказов не найдено..."
					},
					cart: {
						totalCost: "Итого",
						title: "Оформить заказ",
						empty: "Ваша корзина пуста...",
						form: {
							title: "Заполните форму заказа",
							address: "Введите ваш адрес",
							method: {
								cash: "Наличными",
								byCard: "Карте",
								notSelected: "Оплата по:",
							},
							order: "Заказать",
							delete: "Удалить"
						}
					},
					form: {
						emailError: "Неверная форма записи e-mail",
						passwordError: "Минимальная длина пароля: 6 символов",
						passwordPlaceholder: "Введите ваш пароль",
						namePlaceholder: "Введите ваше имя",
						onlyLetters: "Использовать можно только буквы"
					},
					successOrder: {
						thanks: "спасибо за заказ!",
						order: {
							first: "Ваш заказ",
							second: "успешно оформлен!"
						}
					},
					error: "Что-то пошло не так..."
				},
			},
		},
		fallbackLng: "en",
	});

export default i18n;
