import React from "react";
import CommunityCar from "../components/CommunityCarousel";
import CommunityPost from "../components/CommunityPost";
import CommunityReplies from "../components/CommunityReplies";

class Community extends React.PureComponent {
    render() {
        return (
            <div>
                <CommunityCar />
                <CommunityPost />
                <CommunityReplies />
            </div>
        )
    }
}
export default Community;