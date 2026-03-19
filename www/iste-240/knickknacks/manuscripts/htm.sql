UPDATE document
WHERE id = 'sectionA'
ON 'click' PREVENT DEFAULT DO (
	UPDATE document
	WHERE id = 'paragraph'
	SET content = 'hi'
),
ON 'dblclick' DO
	(DELETE FROM document WHERE id = 'paragraph'),
	(
		INSERT INTO document (class, tag, href) VALUES ('link', 'a', 'https://google.com')
);
