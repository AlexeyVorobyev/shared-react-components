import {TTagEntity} from "../../frontend-time-manager/src/redux/api/types/tags.ts"

export const formatTag = (value: TTagEntity) => {
	return {
		id: value.tagId,
		name: value.tagName
	}
}