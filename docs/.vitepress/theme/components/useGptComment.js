import {ref} from 'vue'
export default function useGptComment() {
    const list = ref([{"user":111,"comment":3333,"id":1,"pid":null,children: [{"user":222,"comment":3333,"id":3,"pid":1}]},{"user":222,"comment":3333,"id":13,"pid":null,children: [{"user":222,"comment":3333,"id":32,"pid":1}]}])
    return {list}
}
