export async function createShortUrl(db, shortId, originalUrl) {
    const [result] = await db.query(
        'INSERT INTO urls (short_id, original_url) VALUES (?, ?)',
        [shortId, originalUrl]
    );
    return result.insertId;
}

export async function getOriginalUrl(db, shortId) {
    const [result] = await db.query(
        'SELECT original_url FROM urls WHERE short_id = ?',
        [shortId]
    );
    if (result.length > 0) {
        await updateCountUrl(db, shortId); // Increment the access count
    }
    return result[0] || null;
}

export async function getStatsUrl(db, shortId) {
    const [result] = await db.query(
        'SELECT short_id, original_url, access_count, created_at FROM urls WHERE short_id = ?',
        [shortId]
    );
    return result[0] || null;
}

async function updateCountUrl(db, shortId) {
    const [result] = await db.query(
      'UPDATE urls SET access_count = access_count + 1 WHERE short_id = ?',
      [shortId]
    );
    return result;
  }
