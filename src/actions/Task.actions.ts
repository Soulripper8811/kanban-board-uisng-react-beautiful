import axios, { AxiosError } from "axios";

export const getAllTask = async () => {
  try {
    // const user = await currentUser();

    // if (!user) {
    //   throw new Error("User not found!");
    // }

    const { data: tasks } = await axios.get("http://localhost:4000/tasks");

    return {
      message: null,
      tasks,
    };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      if (error.response) {
        return {
          message: (error.response?.data as any).message.toString(),
          tasks: null,
        };
      }
    }
    return {
      message: error.message,
      tasks: null,
    };
  }
};

export const getAllStages = async () => {
  try {
    // const user = await currentUser();

    // if (!user) {
    //   throw new Error("User not found!");
    // }

    const { data: stages } = await axios.get(
      "http://localhost:4000/tasks/stages"
    );

    return {
      message: null,
      stages,
    };
  } catch (error: any) {
    if (error instanceof AxiosError) {
      if (error.response) {
        return {
          message: (error.response?.data as any).message.toString(),
          stages: null,
        };
      }
    }
    return {
      message: error.message,
      stages: null,
    };
  }
};
