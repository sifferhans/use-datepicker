import { reactive, computed, ref, unref } from 'vue'
import { getDaysInMonth } from './utils'
import type { MaybeRef } from './types'

export interface UseDatepickerOptions {
	/**
	 * Date used when initializing the useDatepicker composable.
	 * 
	 * @default new Date()
	 */
	initialDate?: MaybeRef<Date>
}

/**
 * Encapsulated logic for a functional datepicker.
 * 
 * @param options 
 * @returns 
 */
export function useDatepicker(initialDate: MaybeRef<Date> = new Date()) {
	initialDate = unref(initialDate)

	// DATE

	/**
	 * The selected day of the month.
	 */
	const currentDate = ref<number>(initialDate.getDate())

	/**
	 * Set the selected day of the month.
	 * 
	 * @param date
	 */
	function setDate(date: number) {
		currentDate.value = date
	}

	/**
	 * Check if the specified date is currently selected.
	 * 
	 * @param date 
	 * @returns boolean
	 */
	function isCurrentDate(date: number) {
		return date == currentDate.value;
	}

	/**
	 * Returns props to be used with `v-bind` for the specified day of the month.
	 * 
	 * @param date 
	 */
	function getDateProps(date: number) {
		return reactive({
			"aria-label": new Date(
				currentYear.value,
				currentMonth.value,
				date
			).toLocaleString(),
			"aria-selected": isCurrentDate(date),
			tabindex: 0,
		})
	}

	/**
	 * Returns events to be used with `v-on` for the specified day of the month.
	 * 
	 * @param date 
	 */
	function getDateEvents(date: number) {
		return {
			click() {
				setDate(date)
			}
		}
	}

	/**
	 * The number of days in the selected month
	 */
	const days = computed(() => getDaysInMonth(currentYear.value, currentMonth.value));


	// MONTH

	/**
	 * The selected month
	 */
	const currentMonth = ref<number>(initialDate.getMonth())

	/**
	 * Select the next month
	 */
	function previousMonth() {
		currentMonth.value -= 1
	}

	/**
	 * Select the previous month
	 */
	function nextMonth() {
		currentMonth.value += 1
	}


	// YEAR

	/**
	 * The selected year
	 */
	const currentYear = ref<number>(initialDate.getFullYear())

	/**
	 * Select the previous year
	 */
	function previousYear() {
		currentYear.value -= 1
	}

	/**
	 * Select the next year
	 */
	function nextYear() {
		currentYear.value += 1
	}


	return {
		currentDate,
		setDate,
		isCurrentDate,
		getDateProps,
		getDateEvents,
		days,

		currentMonth,
		previousMonth,
		nextMonth,

		currentYear,
		previousYear,
		nextYear,
	}
}