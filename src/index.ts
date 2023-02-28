import { reactive, computed, ref, Ref } from 'vue'

type MaybeRef<T> = Ref<T> | undefined

export interface UseDatepickerOptions {
	/**
	 * Date used when initializing the useDatepicker composable.  
	 * @default new Date()
	 */
	initialDate?: MaybeRef<Date>
}

export function useDatepicker(options: UseDatepickerOptions = {}) {
	const { initialDate = new Date() } = options

	// Date
	const currentDate = ref(initialDate.getDate())

	return {
		currentDate
	}
}