

def sort_arr(array):
	for idx0 in range(0, len(array)):
		for idx1 in range(0, len(array):
			if array[idx0] > array[idx1]:
				temp = array[idx0]
				array[idx0] = array[idx1]
				array[idx1] = temp
	return array

