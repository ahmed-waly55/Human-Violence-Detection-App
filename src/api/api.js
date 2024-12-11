import axios from "axios";
import { toast } from "react-toastify";

export const uploadVideo = async (video, setViolentMoments, setLoading) => {
  setLoading(true);  
  setViolentMoments([]);  

  const formData = new FormData();
  formData.append("video", video);

  try {
    const response = await axios.post("http://127.0.0.1:5000/upload", formData);
    const { violent_moments } = response.data;

    if (violent_moments.length === 0) {
      toast.info("No violence detected.");
    } else {
      toast.success(`Violence detected in ${violent_moments.length} frame(s).`);
      setViolentMoments(violent_moments);
    }
  } catch (error) {
    toast.error("Error processing the video.");
  } finally {
    setLoading(false);  
  }
};
