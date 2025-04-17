import {createShortUrl, getOriginalUrl, getStatsUrl} from '../models/urlModel.js';
import {nanoid} from 'nanoid';

export async function newShortUrl(req, res) {
    try {
        const { original_url } = req.body;
        const short_id = nanoid(7);
        if (!original_url) {
            return res.status(400).json({ error: 'URL original es requerida' });
        }
        const db = req.app.locals.db;
        await createShortUrl(db, short_id, original_url);
        const shortUrl = `${req.protocol}://${req.get('host')}/${short_id}`;

        res.status(201).json({ shortUrl });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error creando short URL' });
    }


}

export async function redirectToOriginalUrl(req, res) {
    const { shortId } = req.params;
    const db = req.app.locals.db;

    try {
        const result = await getOriginalUrl(db, shortId);

        if (result) {
            res.redirect(result.original_url);
        } else {
            res.status(404).send('URL no encontrada');
        }
    } catch (err) {
        console.error('Error al redirigir:', err);
        res.status(500).send('Error interno del servidor');
    }
}

export async function getStats(req, res) {
    const { shortId } = req.params;
    const db = req.app.locals.db;
  
    try {
      const result = await getStatsUrl(db, shortId);
  
      if (result) {
        res.status(200).json({result 
         });
      } else {
        res.status(404).json({ error: 'URL no encontrada' });
      }
    } catch (err) {
      console.error('Error al acceder a las estadisticas:', err);
      res.status(500).send('Error interno del servidor');
    }
  }
  

