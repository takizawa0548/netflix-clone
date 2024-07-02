import useSWR from "swr";

import fetcher from "@/ilb/fetcher";

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/user", fetcher);
    
    return {
        data,
        isLoading,
        error,
        mutate
    };
}

export default useCurrentUser;