wipe_db:
	rm -rf db.sqlite3

clean:
	find . -type f -name '*.pyc' -delete
	find . -type f -name '*.DS_Store' -delete

serve:
	python manage.py runserver
