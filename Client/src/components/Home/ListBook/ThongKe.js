import { PageContainer } from "./styled";

const ThongKe = () => {
    return (
        <PageContainer>
            <div className="history mb-16 m-10">
                <div className="mb-10 ml-5 pt-10 fs-14 green-text fw-600">Lịch sử đọc </div>
            </div>
            <div className="following mb-16 m-10">
                <div className="mb-10 ml-5 pt-10 fs-14 green-text fw-600">Sách đang theo dõi </div>
            </div>
            <div className="rank m-10">
                <div className="mb-10 ml-5 pt-10 fs-14 green-text fw-600">Xếp hạng </div>
            </div>
        </PageContainer>
    )
}

export default ThongKe;