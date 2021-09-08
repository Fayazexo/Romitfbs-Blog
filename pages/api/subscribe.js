import { Directus } from '@directus/sdk';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const directus = new Directus(process.env.API_URL);
    const response = await directus.items('subscribers').createOne({
      email: email
    });

    if (response.status >= 400) {
      const text = await response.text();

      if (text.includes('already subscribed')) {
        return res.status(400).json({
          error: `You're already subscribed to my mailing list.`
        });
      }

      return res.status(400).json({
        error: text
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
