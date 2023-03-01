import { reactive, computed, ref, unref } from 'vue'
import type { Ref } from 'vue'

type MaybeRef<T> = T | Ref<T>

export interface UseDatepickerOptions {
	/**
	 * Date used when initializing the useDatepicker composable.
	 * 
	 * @default new Date()
	 */
	initialDate?: MaybeRef<Date>
}

/**
 * Encapsulated logic for a functional datepicker
 * 
 * @param options 
 * @returns 
 */
export function useDatepicker(initialDate: MaybeRef<Date> = new Date()) {
	initialDate = unref(initialDate)

	// Date
	const currentDate = ref<number>(initialDate.getDate())

	function getDateProps(date: number) {
		return reactive({
			'aria-selected': date === currentDate.value
		})
	}

	function getDateEvents(date: number) {
		return {
			click() {
				currentDate.value = date
			}
		}
	}


	// Month
	const currentMonth = ref<number>(initialDate.getMonth())

	function previousMonth() {
		currentMonth.value -= 1
	}

	function nextMonth() {
		currentMonth.value += 1
	}


	// Year
	const currentYear = ref<number>(initialDate.getFullYear())

	function previousYear() {
		currentYear.value -= 1
	}

	function nextYear() {
		currentYear.value += 1
	}


	return {
		currentDate,
		getDateProps,
		getDateEvents,

		currentMonth,

		currentYear,
		previousYear,
		nextYear,
	}
}