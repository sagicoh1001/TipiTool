import { collection, getDocs } from "firebase/firestore";
import FireBaseDB from "./dbInit";


const getAllDocuments = async () => {
    try {
        const querySnapshot = await getDocs(collection(FireBaseDB, "FAQ"));
        const dataArr = []
        querySnapshot.forEach((doc) => {
          const response = {id: doc.id, answer: doc.data().answer, question: doc.data().question, category: doc.data().category}
          dataArr.push(response)
        })
        return dataArr
    }
    catch (e) {
        console.log(`error: ${e}`)
    }
}

export default getAllDocuments