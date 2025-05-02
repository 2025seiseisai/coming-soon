use actix_web::{web, App, HttpRequest, HttpResponse, HttpServer, Responder};
use chrono::{TimeZone, Utc};
use chrono_tz::Asia::Tokyo;

async fn redirect(req: HttpRequest) -> impl Responder {
    // 現在時刻（JST）
    let now_jst = Utc::now().with_timezone(&Tokyo);

    // 閾値（JST）
    let threshold = Tokyo.with_ymd_and_hms(2025, 5, 14, 15, 0, 0).unwrap();

    // リダイレクト先ベースURL
    let base_url = if now_jst < threshold {
        "http://localhost:3001"
    } else {
        "http://localhost:3000"
    };

    // パスとクエリを取得
    let path = req.uri().path();
    let query = req.uri().query().unwrap_or("");

    // 結合して最終URLを構築
    let final_url = if query.is_empty() {
        format!("{base_url}{path}")
    } else {
        format!("{base_url}{path}?{query}")
    };

    HttpResponse::Found()
        .append_header(("Location", final_url))
        .finish()
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Listening on http://localhost:3002");

    HttpServer::new(|| {
        App::new().default_service(web::to(redirect)) // すべてのパスに対応
    })
    .bind(("127.0.0.1", 3002))?
    .run()
    .await
}
